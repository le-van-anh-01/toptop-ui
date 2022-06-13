import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import images from "@/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia, faEllipsisVertical, faGear, faKeyboard,
    faSignOut,
    faUser
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import Button from "@/components/Button";
import Menu from "@/components/Popper/Menu";
import { InboxIcon, MessageIcon, UploadIcon } from "@/components/Icons";
import Image from "@/components/Image";
import Search from "../Search";
import { Link } from "react-router-dom";
import config from "@/config";


const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese'
                },
                {
                    type: 'language',
                    code: 'ja',
                    title: 'Japanese'
                },
            ]
        }

    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and help",
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    },
]

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: "View profile",
        to: '/@hoo'
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: "Get coins",
        to: '/coin'
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: "Setting",
        to: '/seting'
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: "Log out",
        to: '/logout',
        separate: true,
    },
]

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle Change Language
                break;

            default:
                break;
        }
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="TopTop" />
                </Link>
                {/* Search box */}
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={200} content='Upload video' placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={200} content='Message' placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={200} content='Inbox' placement="bottom">
                                <button className={cx('action-btn')}>
                                    <div className={cx('badge')}>12</div>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) :
                        <>
                            <Button text >Upload</Button>
                            <Button primary>Log in</Button>
                            <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    }
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image className={cx('user-avatar')}
                                src=""
                                alt="user name" />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div >
        </header >
    )
}

export default Header;