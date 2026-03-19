'use server';
/**
 * @fileOverview A Genkit flow for generating personalized emergency preparedness plans.
 *
 * - generatePersonalizedPrepPlan - A function that handles the personalized plan generation process.
 * - PersonalizedPrepPlanInput - The input type for the generatePersonalizedPrepPlan function.
 * - PersonalizedPrepPlanOutput - The return type for the generatePersonalizedPrepPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedPrepPlanInputSchema = z.object({
  familySize: z.number().int().positive().describe('The number of people in the family.'),
  location: z.string().describe('The user\u2019s geographical location (e.g., city, state, or specific address).'),
  localRisks: z.array(z.string()).describe('A list of potential local risks (e.g., earthquakes, hurricanes, floods, wildfires).'),
});
export type PersonalizedPrepPlanInput = z.infer<typeof PersonalizedPrepPlanInputSchema>;

const PersonalizedPrepPlanOutputSchema = z.object({
  planTitle: z.string().describe('A title for the personalized emergency preparedness plan.'),
  planSummary: z.string().describe('A concise summary of the emergency preparedness plan.'),
  recommendedSupplies: z.array(z.string()).describe('A list of recommended emergency supplies.'),
  actionsToTake: z.array(z.string()).describe('A list of specific actions to take for preparedness.'),
  relevantResources: z.array(z.object({
    name: z.string().describe('The name or title of the resource.'),
    url: z.string().url().describe('The URL to the relevant resource or product.'),
  })).describe('A list of relevant resources and external links.'),
});
export type PersonalizedPrepPlanOutput = z.infer<typeof PersonalizedPrepPlanOutputSchema>;

export async function generatePersonalizedPrepPlan(input: PersonalizedPrepPlanInput): Promise<PersonalizedPrepPlanOutput> {
  return personalizedPrepPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedPrepPlanPrompt',
  input: {schema: PersonalizedPrepPlanInputSchema},
  output: {schema: PersonalizedPrepPlanOutputSchema},
  prompt: `You are an expert in emergency preparedness, tasked with creating a customized plan for a family.

Generate a comprehensive emergency preparedness plan based on the following details:

Family Size: {{{familySize}}} people
Location: {{{location}}}
Potential Local Risks: {{{localRisks}}}

Your plan should include:
- A clear and descriptive plan title.
- A concise summary of the plan.
- A detailed list of recommended emergency supplies, considering the family size and local risks.
- A step-by-step list of specific actions the family should take to prepare, tailored to their location and risks.
- A list of relevant resources or links for further information or recommended products (e.g., government emergency preparedness sites, specific product categories).

Ensure the output is in a structured JSON format matching the schema described. Do not include any conversational text outside the JSON object.

Example for \"relevantResources\": [{\"name\": \"FEMA Preparedness Guide\", \"url\": \"https://www.fema.gov/plan\"}]
`,
});

const personalizedPrepPlanFlow = ai.defineFlow(
  {
    name: 'personalizedPrepPlanFlow',
    inputSchema: PersonalizedPrepPlanInputSchema,
    outputSchema: PersonalizedPrepPlanOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate personalized preparedness plan.');
    }
    return output;
  },
);
