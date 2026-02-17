import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { toast } from 'sonner';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function useSubmitContact() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) {
        throw new Error('Backend actor not initialized');
      }

      // Basic validation
      if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
        throw new Error('All fields are required');
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        throw new Error('Please enter a valid email address');
      }

      await actor.submitContact(data.name, data.email, data.message);
    },
    onSuccess: () => {
      toast.success('Message sent successfully!');
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to send message. Please try again.');
    },
  });
}
