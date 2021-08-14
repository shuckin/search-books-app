import { RecommendedItem } from "./RecommendedItem";

export const Recommended = () => {
  return (
    <section className="w-full px-5 pt-8">
      <div className="flex items-center justify-start w-full mb-2">
        <h4 className="text-sm text-gray-dark font-medium">Recommended</h4>
      </div>
      <div>
        <RecommendedItem />
      </div>
    </section>
  );
};
