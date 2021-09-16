import { createTemplateAction } from '@backstage/plugin-scaffolder-backend';
import { SendStatusMessage } from '../../../plugins/statusreportbackend';

export const SendStatusMessageAction = () => {
    return createTemplateAction<{ message: string }>({
        id: 'mycompany:send-status-message',
        schema: {
            input: {
                required: ['message'],
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        title: 'Message',
                        description: 'The message to send to backend API',
                    },
                },
            },
        },
        async handler(ctx) {
            ctx.logStream.write(ctx.input.message);
            await SendStatusMessage(`${ctx.input.message}`)
        },
    });
}