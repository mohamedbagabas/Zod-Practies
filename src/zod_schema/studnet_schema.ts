import { z, TypeOf } from 'zod';

export const studnet_schema = z.object({
  body: z.object({
    
    id: z.string({ required_error: 'ID is required !' })
    .min(3, 'You id must be more than 3 char'),
    name: z
      .string({ required_error: 'name is required !' })
      ,
      major:z
      .enum(['IT' , 'IS' , 'CS','SWE']),
    level: z.
    number({ required_error: 'level is requird !' })
    .max(8, 'level number must be from 1-8'), 
    
    GPA: z 
      .number({ required_error: 'GPA is required !' })
      .max(5,"GPA must be less than 5").min(0,'GPA must be more than 0'),
   
}),
});

export type StudentSchemaType = TypeOf<typeof studnet_schema>['body'];