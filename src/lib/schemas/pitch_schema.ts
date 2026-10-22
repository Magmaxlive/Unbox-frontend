import {z} from "zod";

export const pitchSchema = z.object({
    name : z.string().trim().min(2,'Name is required'),
    email : z.email({error:'Enter a valid email address'}),
    story : z.string().trim().min(10,'Message must be at least 10 characters'),
    topic : z.enum(
        ['Politics','Community','Food','Fashion','Tech','World','Other'],
        {error : 'Please select a topic'}
    )

})

export type PitchFormData = z.infer<typeof pitchSchema>;