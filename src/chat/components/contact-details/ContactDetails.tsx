import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"

import { getClient } from "@/fake/fake-data"
import { NoContactSelected } from "../NoContactSelected";
import { ContactInfoSkeleton } from "../ContactInfoSkeleton";
import { ConatctInfo } from "../ConatctInfo";

export const ContactDetails = () => {

  const { clientId } = useParams();

  const { data: client, isLoading } = useQuery({
    queryKey: ['client', clientId],
    queryFn: () => getClient(clientId!),
    enabled: !!clientId
  })

  if (!clientId) {
    return <NoContactSelected />
  }

  if (isLoading && !client) {
    return <ContactInfoSkeleton />
  }

  if (client) {
    return <ConatctInfo client={client} />
  }
  return (
    <div>Client not found</div>
  )
}
