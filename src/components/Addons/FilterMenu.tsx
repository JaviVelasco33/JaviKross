import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import "@/styles/components/Addons/_FilerMenu.scss";

export interface Filter {
    type: "year" | "prio";
    prioFocus?: 1 | 2 | 3 | null;
    order: "asc" | "desc";
}

interface FilterMenuProps {
    onFilterChange: (filter: Filter) => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({ onFilterChange }) => {
    const [filter, setFilter] = useState<Filter>({
        type: "year",
        prioFocus: null,
        order: "desc",
    });

    const handleChange = (value: string) => {
        const map: Record<string, Filter> = {
            year: { type: "year", prioFocus: null, order: filter.order },
            aftermovies: { type: "prio", prioFocus: 1, order: filter.order },
            extras: { type: "prio", prioFocus: 2, order: filter.order },
            presentaciones: { type: "prio", prioFocus: 3, order: filter.order },
        };
        const newFilter = map[value] as Filter;
        setFilter(newFilter);
        onFilterChange(newFilter);
    };

    function toggleOrder() {
        const newOrder = filter.order === "asc" ? "desc" : "asc";
        const newFilter = { ...filter, order: newOrder } as Filter;
        setFilter(newFilter);
        onFilterChange(newFilter);
    };

    return (
        <div className="filter-menu">
            <select className="filter-select" 
            value={
                filter.type === "year" 
                ? "year" 
                : filter.prioFocus === 1
                ? "aftermovies"
                : filter.prioFocus === 2
                ? "extras"
                : "presentaciones"
            }
                onChange={(e) => handleChange(e.target.value)}
            >
                <option value="year">Año</option>
                <option value="aftermovies">Aftermovies</option>
                <option value="extras">Extras</option>
                <option value="presentaciones">Presentaciones</option>
            </select>
            
            <CustomButton className="filter-order" 
            label={                
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-sort"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 9l4 -4l4 4m-4 -4v14" /><path d="M21 15l-4 4l-4 -4m4 4v-14" /></svg>
            } 
            onClick={toggleOrder}  
            type="button"/>
        </div>
    );
};

export default FilterMenu;