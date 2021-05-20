import React, { useState } from "react";
import CountriesList from './Component/CountriesList';
import { useMemo } from "react";

const SearchFilter = () => {
    const [search, setSearch] = useState("");

    const countries = useMemo(() => {
        if (!search) return CountriesList;

        return CountriesList.filter((country) => {
            return (
                country.name.toLowerCase().includes(search.toLowerCase()) ||
                country.dialCode.toLowerCase().includes(search.toLowerCase())
            );
        });
    }, [search, CountriesList]);

    return (
        <>


            <div className="row justify-content-center mt-4">
                <div className="col-lg-6 text-center">
                    <div className="row">
                        <div className="col-12">
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span
                                        className="input-group-text"
                                        id="basic-addon1"
                                    >
                                        <i class='fa fa-search'></i>
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Country"
                                    aria-label="Search"
                                    aria-describedby="basic-addon1"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <ul className="list-group text-left">
                                {countries.map((country, idx) => (
                                    <CountryListItem {...country} key={idx} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const CountryListItem = ({ name, flag, region }) => {
    return (
        <li className="list-group-item d-flex">
            <div className="d-inline">
                <img src={flag} style={{ width: "60px" }} />
            </div>
            <div className="col pt-2">
                {name} <span className="badge badge-info">{region}</span>
            </div>
        </li>
    );
};

export default SearchFilter;