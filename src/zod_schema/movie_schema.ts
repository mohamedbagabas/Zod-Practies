import { z, TypeOf } from 'zod';

export const movie_schema = z.object({
  body: z.object({
    
    id: z.string({ required_error: 'ID is required !' })
    .min(3, 'You id must be more than 3 char'),
    name: z
      .string({ required_error: 'name is required !' })
      ,
      gener:z
      .enum(['Drama' , 'Action' , 'Comedy']),
    Rating: z.
    number({ required_error: 'Rating is requird !' })
    .max(5, 'Rating number must be from 1-5'), 
    
    duration: z 
      .number({ required_error: 'Duration is required !' })
      .min(60,"Duration must be more than 60min"),
   
}),
});

export type MovieSchemaType = TypeOf<typeof movie_schema>['body'];