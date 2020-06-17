import React, { useState, useEffect } from "react";
import "./style.css";
import queryString from "query-string";
import Pagination from "./PaginationFood";
import SearchForm from "./Searchfood";
import FoodList from "./Foodlist";
function OrderFood() {
  const [foodList, setFoodList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    const paramsString = queryString.stringify(filters);
    async function fetchFoodList() {
      try {
        const requireUrl = `http://tkfood-db.herokuapp.com/foods`;
        const response = await fetch(requireUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });
        const { data, pagination } = responseJSON;
        setFoodList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Error", error);
      }
    }
    fetchFoodList();
  }, [filters]);

  function handlePageChange(newPage) {
    console.log("new page", newPage);

    setFilters({
      ...filters,
      _page: newPage,
    });
  }
  function handleFiltersChange(newFilters) {
    console.log("new filters", newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.search,
    });
  }

  return (
    <div className="food">
      <SearchForm onSubmit={handleFiltersChange} />
      <FoodList foods={foodList} />
      {/* <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
    </div>
  );
}

export default OrderFood;
