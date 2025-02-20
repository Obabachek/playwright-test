import { test, expect } from '../fixtures';

test('User Registration and Profile Management', async ({ mainPage, registrationPage, profilePage, logoutPage, randomString }) => {
    const userCode = randomString(8);
    console.log(`Generated user code: ${userCode}`); // It will be used as password and unique part of email

    await mainPage.goto();
    await mainPage.signIn();
    console.log('Clicked sign-in');

    // Registration
    console.log('Verify country and currency');
    await registrationPage.verifyCountryAndCurrency('Canada', 'CAD');
    const termsCheckbox = await registrationPage.getTermsCheckbox();
    await termsCheckbox.click();
    console.log('Verify terms checkbox is checked');
    await expect(termsCheckbox).toBeChecked();

    console.log('Verify newsletter checkbox is not checked');
    await expect(await registrationPage.getNewsletterCheckbox()).not.toBeChecked();

    const email = `andrii.qa31+${userCode}@gmail.com`;
    console.log(`Registering user with email: ${email}`);
    await registrationPage.register(email, userCode);

    // Go to the profile page
    //await profilePage.goto();
    //await profilePage.selectState('Ontario');
    //await profilePage.setGender('Male');
    //await profilePage.setDateOfBirth('1990-01-01');
    //await profilePage.saveProfile();

    // Verify that the changes have been saved successfully
    //await profilePage.verifyProfileData('Ontario', 'Male', '1990-01-01');
    // Log out from the account
    //await logoutPage.logout();
    // Verify that the user has logged out successfully
    //await logoutPage.verifyLogout();
});
