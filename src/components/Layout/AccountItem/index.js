import React from "react";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/d49908509bbe65491f4271da854c753b~c5_100x100.jpeg?x-expires=1654664400&x-signature=HeAFKkenM7%2FuSLClDF47KjGbB5w%3D" alt="name" />
            <div className={cx('info')}>
                <p className={cx('name')} >
                    <span>TRan A</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </p>
                <span className={cx('use-name')}> nguyenvana</span>
            </div>
        </div>
    );
};

export default AccountItem;
