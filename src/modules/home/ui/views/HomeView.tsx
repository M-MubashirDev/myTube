import CategoriesSection from "../Sections/CategoriesSection";

interface HomeViewProps {
  catergoryId?: string;
}

function HomeView({ catergoryId }: HomeViewProps) {
  return (
    <div className="max-w-[2400px] bg-red-300 mx-auto px-4 mb-10 pt-2.5 flex flex-col gap-y-6">
      <CategoriesSection catergoryId={catergoryId} />
    </div>
  );
}

export default HomeView;
