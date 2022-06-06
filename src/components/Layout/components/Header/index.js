import images from "@/assets/images";
import { faCircleXmark, faMagnifyingGlass, faSignIn, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "@/components/Popper";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import AccountItem from "../../AccountItem";
import Button from "@/components/Button";



const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 1000);

    }, []);


    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TopTop" />
                </div>
                <div>
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}>
                        <div className={cx('search')}>
                            <input placeholder="Search accounts and videos" spellCheck={false} />
                            <button className={cx('clear')}>
                                {/* Clear search */}
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            {/* Loading */}
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippy>
                </div>
                <div className={cx('actions')}>
                    <Button text >Upload</Button>
                    <Button primary>Log in</Button>
                </div>
            </div>
        </header >
    )
}

export default Header;