
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generatePersonalizedPrepPlan, type PersonalizedPrepPlanOutput } from "@/ai/flows/personalized-prep-plan-generation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Loader2, Shield, AlertTriangle, Package, ExternalLink, RefreshCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const plannerSchema = z.object({
  familySize: z.coerce.number().int().positive().max(20),
  location: z.string().min(2, "Location is required"),
  localRisks: z.array(z.string()).min(1, "Select at least one risk"),
});

type PlannerForm = z.infer<typeof plannerSchema>;

const RISKS = [
  "Earthquakes", "Hurricanes", "Floods", "Wildfires", "Winter Storms", "Tornados", "Power Outages", "Civil Unrest"
];

export default function PlannerPage() {
  const [plan, setPlan] = useState<PersonalizedPrepPlanOutput | null>(null);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<PlannerForm>({
    resolver: zodResolver(plannerSchema),
    defaultValues: {
      familySize: 2,
      location: "",
      localRisks: [],
    }
  });

  const selectedRisks = watch("localRisks");

  const toggleRisk = (risk: string) => {
    const current = selectedRisks;
    if (current.includes(risk)) {
      setValue("localRisks", current.filter(r => r !== risk));
    } else {
      setValue("localRisks", [...current, risk]);
    }
  };

  const onSubmit = async (data: PlannerForm) => {
    setLoading(true);
    try {
      const result = await generatePersonalizedPrepPlan(data);
      setPlan(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl font-headline font-bold text-primary">Personalized Preparedness Planner</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Our AI analyzes your specific situation to generate a tailored emergency response strategy.
        </p>
      </div>

      {!plan ? (
        <Card className="max-w-2xl mx-auto shadow-lg border-2 border-muted">
          <CardHeader className="bg-muted/50">
            <CardTitle>Tell us about your household</CardTitle>
            <CardDescription>We use this information to calculate resource needs and specific risk responses.</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-8">
            <form id="plan-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="familySize">Family Size (Household Members)</Label>
                <Input
                  id="familySize"
                  type="number"
                  placeholder="e.g. 4"
                  {...register("familySize")}
                  className={errors.familySize ? "border-destructive" : ""}
                />
                {errors.familySize && <p className="text-xs text-destructive">{errors.familySize.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location (City, State)</Label>
                <Input
                  id="location"
                  placeholder="e.g. Los Angeles, CA"
                  {...register("location")}
                  className={errors.location ? "border-destructive" : ""}
                />
                {errors.location && <p className="text-xs text-destructive">{errors.location.message}</p>}
              </div>

              <div className="space-y-3">
                <Label>Primary Local Risks</Label>
                <div className="grid grid-cols-2 gap-4">
                  {RISKS.map((risk) => (
                    <div key={risk} className="flex items-center space-x-2 border p-3 rounded-lg hover:bg-muted/30 cursor-pointer" onClick={() => toggleRisk(risk)}>
                      <Checkbox
                        id={risk}
                        checked={selectedRisks.includes(risk)}
                        onCheckedChange={() => toggleRisk(risk)}
                      />
                      <label htmlFor={risk} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                        {risk}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.localRisks && <p className="text-xs text-destructive">{errors.localRisks.message}</p>}
              </div>
            </form>
          </CardContent>
          <CardFooter className="bg-muted/50 flex justify-end p-4">
            <Button
              form="plan-form"
              type="submit"
              disabled={loading}
              className="bg-accent hover:bg-accent/90 text-white min-w-[150px]"
            >
              {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</> : "Generate My Plan"}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex justify-between items-center bg-white p-6 rounded-xl shadow-sm border">
            <div>
              <h2 className="text-2xl font-bold text-primary font-headline">{plan.planTitle}</h2>
              <p className="text-muted-foreground">{plan.planSummary}</p>
            </div>
            <Button variant="outline" onClick={() => setPlan(null)} className="flex items-center gap-2">
              <RefreshCcw className="h-4 w-4" /> Start New
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-md">
              <CardHeader className="bg-primary text-white">
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" /> Recommended Supplies
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {plan.recommendedSupplies.map((supply, i) => (
                    <li key={i} className="flex items-start gap-3 border-b pb-2 last:border-0">
                      <div className="mt-1 h-2 w-2 rounded-full bg-accent" />
                      <span className="text-sm">{supply}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader className="bg-accent text-white">
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" /> Immediate Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {plan.actionsToTake.map((action, i) => (
                    <li key={i} className="flex items-start gap-3 border-b pb-2 last:border-0">
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm">{action}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-md border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <AlertTriangle className="h-5 w-5" /> Relevant Resources & Links
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {plan.relevantResources.map((resource, i) => (
                  <a
                    key={i}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white rounded-lg border hover:border-accent hover:shadow-sm transition-all group"
                  >
                    <span className="text-sm font-semibold truncate mr-2">{resource.name}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent flex-shrink-0" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
