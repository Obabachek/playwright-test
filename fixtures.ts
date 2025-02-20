import { test as base } from '@playwright/test';
import { RegistrationPage } from './pages/RegistrationPage';
import { ProfilePage } from './pages/ProfilePage';
import { LogoutPage } from './pages/LogoutPage';
import { MainPage } from "./pages/MainPage";

type Fixtures = {
    registrationPage: RegistrationPage;
    profilePage: ProfilePage;
    logoutPage: LogoutPage;
    mainPage: MainPage;
    randomString: (length: number) => string;
};

export const test = base.extend<Fixtures>({
    registrationPage: async ({ page }, use) => {
        await use(new RegistrationPage(page));
    },
    profilePage: async ({ page }, use) => {
        await use(new ProfilePage(page));
    },
    logoutPage: async ({ page }, use) => {
        await use(new LogoutPage(page));
    },
    mainPage: async ({ page }, use) => {
        await use(new MainPage(page));
    },
    randomString: async ({}, use) => {
        const generateRandomString = (length: number): string => {
            return Math.random().toString(36).substring(2, 2 + length);
        };
        await use(generateRandomString);
    }
});

export { expect } from '@playwright/test';
