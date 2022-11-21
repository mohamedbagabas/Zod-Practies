import { z, TypeOf } from 'zod';

export const bank_schema = z.object({
  body: z.object({
    
    id: z.string({ required_error: 'ID is required !' })
    .min(3, 'You id must be more than 3 char'),
    username: z
      .string({ required_error: 'username is required !' })
      .min(6,"username must be more than 6")
      ,
      password:z.string({required_error: 'password is required !'})
      .regex(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])"), "Password must contain at least 1 upper case, lower case, numeric, and special character"),
    balance: z.
    number({ required_error: 'balance is requird !' })
    .min(0, 'balance must be more than 0'), 
    
   
}),
});

export type BankSchemaType = TypeOf<typeof bank_schema>['body'];