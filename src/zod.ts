import {z} from 'zod';

const notificationSchema = z.object({
  notificationType: z.union([z.literal('email'), z.literal('sms')]),
  notificationMode: z.string(),
  notificationModeValue: z.union([z.string(), z.boolean()]),
});

function test(input: object) {
  const validationResult = notificationSchema.safeParse(input);
  console.log(validationResult);
}

const input = {notificationType: 'email', notificationMode: 'isAdmin', notificationModeValue: true};

test(input);
