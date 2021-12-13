import React from 'react';
import { Button, MyImage } from '@components';
import images from '@components/images';
import { useRouter } from 'next/router';
import i18next from 'i18next';
import _ from 'lodash';

const HeaderSearchComponent = ({ state , language}) => {
    const [search, setSearch] = React.useState(false);
    const router = useRouter(),
        whiteLayout = ['about', 'contact'],
        t = i18next.t.bind(i18next);
    return (
        <>
            {search ? (
                <div className="getintouch-form">
                    <input
                        type="text"
                        placeholder={t('search')}
                        className={`form-control search-input ${
                            !state &&
                            _.some(whiteLayout, (lay) =>
                                router.pathname.includes(lay)
                            )
                                ? 'search-white-input'
                                : ''
                        }`}
                    />
                </div>
            ) : (
                <div>
                    <Button
                        btnVarient="red-btn"
                        onClick={() => {
                            router.push(`/${language}/contact`);
                        }}
                    >
                        {t('contactUs')}
                    </Button>
                </div>
            )}
            <div className="search-margin">
                <a
                    className="ms-2 header-search pt-1"
                    onClick={(e) => setSearch(!search)}
                >
                    <MyImage
                        src={images.searchIcon}
                        alt=""
                        className={
                            !state &&
                            _.some(whiteLayout, (lay) =>
                                router.pathname.includes(lay)
                            )
                                ? 'white-logo'
                                : ''
                        }
                        width={17}
                        height={17}
                    />
                </a>
            </div>
        </>
    );
};

export default HeaderSearchComponent;
