import { useRouter } from "next/router";
import { NFT } from "../../types/NFT";
import ListingGridItem from "./ListingGridItem";
import Typography from "../IO/Typography";
import Button from "../IO/Button";

interface ListingGridProps {
  data: NFT[];
}

export default function HomeListingGrid({ data }: ListingGridProps) {
  const router = useRouter();

  return (
    <div className="mt-5 mb-20 grid grid-flow-row auto-rows-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-col-5 md:gap-x-4 xl:gap-x-5 gap-y-10 md:gap-y-16">
      {data.length ? (
        data.map((item, index) => {
          return (
            item.path && (
              <ListingGridItem
                item={item}
                key={index}
                onClick={() => router.push(`/nft/${item._id}`)}
              />
            )
          );
        })
      ) : (
        <>
          <Button
            block
            size="large"
            style="mt-4"
            onClick={() => router.push("/create")}
          >
            Create NFT
          </Button>
          <Typography sub size="small">
            You NFTs will appear here
          </Typography>
        </>
      )}
    </div>
  );
}