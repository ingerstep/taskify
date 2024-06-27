"use client";

import { toast } from "sonner";

import { stripeRedirect } from "@/actions/stripe-redirect";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";
import { useProModal } from "@/hooks/use-pro-modal";

interface SubscriptionButtonProps {
  isPro: boolean;
}

export const SubscriptionButton = ({ isPro }: SubscriptionButtonProps) => {
  const { onOpen: openProModal } = useProModal();

  const { execute, isLoading } = useAction(stripeRedirect, {
    onSuccess: (data) => {
      window.location.href = data;
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onCick = () => {
    if (isPro) {
      execute({});
    } else {
      openProModal();
    }
  };

  return (
    <Button onClick={onCick} disabled={isLoading} variant="primary">
      {isPro ? "Manage subscription" : "Upgrade to pro"}
    </Button>
  );
};
