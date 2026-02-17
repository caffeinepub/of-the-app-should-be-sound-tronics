import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactInquire } from '../backend';

export function useInquiries() {
  const { actor, isFetching: isActorFetching } = useActor();

  return useQuery<ContactInquire[]>({
    queryKey: ['inquiries'],
    queryFn: async () => {
      if (!actor) {
        return [];
      }
      return actor.getAllInquiries();
    },
    enabled: !!actor && !isActorFetching,
  });
}
