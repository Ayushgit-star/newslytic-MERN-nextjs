import React from "react";
import { base_api_url } from "@/config/config";
import SimpleDetailsNewCard from "@/components/news/items/SimpleDetailsNewCard";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

const SearchNews = async ({ searchParams }) => {
  const awaitedParams = await searchParams;
  const searchValue = awaitedParams?.value || "";

  // Fetch search results from your API
  const res = await fetch(`${base_api_url}/api/search/news?value=${encodeURIComponent(searchValue)}`, {
    next: { revalidate: 1 }
  });
  const { news } = await res.json();

  return (
    <div>
      <div className="bg-white shadow-sm py-4">
        <div className="px-4 md:px-8 w-full">
          <Breadcrumb one="search" two={searchValue} />
        </div>
      </div>
      <div className="bg-slate-200 w-full min-h-[60vh]">
        <div className="px-4 md:px-8 w-full py-8">
          <h2 className="text-2xl font-bold mb-4">Search Results for "{searchValue}"</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {news && news.length > 0 ? (
              news.map((item, i) => (
                <SimpleDetailsNewCard news={item} type="details-news" height={200} key={item._id || i} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">No news found.</div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchNews;