import { Page, expect } from '@playwright/test';

export class MainPage {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto('/');
    }

    async signIn() {
        await this.page.getByTestId('open-sign-up__button').first().click();
    }
}