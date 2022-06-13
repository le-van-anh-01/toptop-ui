import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "@/components/Image";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

const AccountItem = ({ data }) => {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx('info')}>
                <p className={cx('name')} >
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                </p>
                <span className={cx('use-name')}>{data.nickname}</span>
            </div>
        </Link>
    );
};


AccountItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default AccountItem;