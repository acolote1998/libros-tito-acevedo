import { useQuery } from "@tanstack/react-query";
import { fethAllRegions } from "../api/fetchAllRegions";

const useRegions = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["regions"],
    queryFn: () => fethAllRegions(),
  });

  return { isPending, error, data };
};

export default useRegions;
