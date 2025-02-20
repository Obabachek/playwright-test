import { Page, expect } from '@playwright/test';

export class RegistrationPage {
    constructor(private page: Page) {
    }

    async fillEmail(email: string) {
        await this.page.getByTestId('registration__input--email').fill(email);
    }

    async fillPassword(password: string) {
        await this.page.getByTestId('registration__input--password').fill(password);
    }

    async getCountry() {
        return this.page.getByTestId('registration__select-country');
    }

    async getCurrency() {
        return this.page.getByTestId('registration__select-currency');
    }

    async getTermsCheckbox() {
        return this.page.locator('.fe-checkbox__mask').first()
    }

    async getNewsletterCheckbox() {
        return this.page.locator('.fe-checkbox__mask').nth(1);
    }

    async register(email: string, password: string) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.page.getByTestId('next__action').click();
    }

    async verifyCountryAndCurrency(country: string, currency: string) {
        const actualCurrency = await (await this.getCurrency()).innerText();
        expect(actualCurrency).toBe(`Currency\n\n${currency}`);
        const actualCountry = await (await this.getCountry()).innerText();
        expect(actualCountry).toBe(`Your country\n\n${country}`);
    }
}