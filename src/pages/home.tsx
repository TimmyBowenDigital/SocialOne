import React, { Component } from "react";
import Button from "../components/ui-elements/button";
import NavPanel from "../components/nav-panel";
import HeaderPanel from "../components/header-panel";
import FooterPanel from "../components/footer-panel";
import NewsFeedPanel from "../components/news-feed";
import ProfileDetailPanel from "../components/profile-detail-section";
import ProfilePage from "../pages/user-profile";

import {
    EuiPage,
    EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
    EuiPageContentHeader,
    EuiPageContentHeaderSection,
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiPageSideBar,
    EuiTitle,
} from '@elastic/eui';

export default () => (
    <EuiPage>
        <EuiPageSideBar>SideBar nav
            <NavPanel />
        </EuiPageSideBar>
        <EuiPageBody>
            <EuiPageHeader>
                <EuiPageHeaderSection>
                    <EuiTitle size="l">
                        <h1>This is the Home Page</h1>
                    </EuiTitle>
                </EuiPageHeaderSection>
                <EuiPageHeaderSection>
                    <HeaderPanel />
                </EuiPageHeaderSection>
            </EuiPageHeader>
            <EuiPageContent>
                <EuiPageContentHeader>
                    <EuiPageContentHeaderSection>
                        <EuiTitle>
                            <h2>News Feed</h2>
                        </EuiTitle>
                    </EuiPageContentHeaderSection>
                    <EuiPageContentHeaderSection>

                    </EuiPageContentHeaderSection>
                </EuiPageContentHeader>
                <EuiPageContentBody>
                    <NewsFeedPanel />
                </EuiPageContentBody>
            </EuiPageContent>
        </EuiPageBody>
    </EuiPage>
);