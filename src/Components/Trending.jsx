import TrendingImage from " public/assets/thumbnails/beyond-earth/regular/small.jpg";

export default function Trending() {
  return (
    <div className="trending flex flex-col  justify-start gap-4">
      <h2 className="text-preset-1-mobile text-white">Trending</h2>
    </div>
  );
}

export const TrendingItem = () => <div className="w-60 h-35"></div>;
