import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import 'tippy.js/dist/tippy.css';

import { SearchIcon } from "@/components/Icons";
import { Wrapper as PopperWrapper } from "@/components/Popper";
import styles from "./Search.module.scss";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import AccountItem from "../../AccountItem";
import { useDebounce } from "@/components/hooks";
import * as searchService from "@/services/searchService";

const cx = classNames.bind(styles);

const Search = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);
    const inputRef = useRef();


    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        };

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debounced);
            setSearchResult(result);

            setLoading(false);

        }
        fetchApi();


    }, [debounced]);


    const handleHideResult = () => {
        setShowResult(false);
    }

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    }

    const handleChange = (e) => {
        const _searchValue = e.target.value;
        if (!_searchValue.startsWith(' ')) {
            setSearchValue(_searchValue);
        }
    }

    return (
        <div>
            <Tippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => {
                                return <AccountItem key={result.id} data={result} />;
                            })}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input ref={inputRef}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        value={searchValue}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            {/* Clear search */}
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {/* Loading */}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={e => { e.preventDefault(); }}>
                        <SearchIcon />
                    </button>
                </div>
            </Tippy>
        </div>
    );
};

export default Search;
