package test;

import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import locators.LocatorWebform;
import locators.LocatorWebformTarget;
import utils.CommonMethods;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class SeleniumWebform {

	private static WebDriver driver = null;

	private LocatorWebform lwf = new LocatorWebform();
	private LocatorWebformTarget lwft = new LocatorWebformTarget();
	private CommonMethods cm = new CommonMethods();

	@BeforeClass
	public static void setUpClass() {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver");

		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(500, TimeUnit.MILLISECONDS);
		driver.manage().timeouts().pageLoadTimeout(3, TimeUnit.SECONDS);
		driver.manage().window().maximize();
	}

	@Before
	public void setUp() {
		driver.get("https://www.selenium.dev/selenium/web/web-form.html");
	}

	@AfterClass
	public static void tearDownClass() {
		driver.close();
	}

	@Test
	public void seleniumWebformPageIsAccessibleWithSuccess() {
		String actualMessage = cm.getPageTitle(driver);
		String expectedMessage = "Web form";

		Assert.assertEquals(expectedMessage, actualMessage);
	}

	@Test
	public void submitSeleniumWebformPageWithSuccess() {
		cm.writeText(driver, lwf.fieldId, "Testing a text field");
		cm.writeText(driver, lwf.fieldPassword, "passwordField");
		cm.writeText(driver, lwf.fieldTextarea, "Testing a text area field");

		cm.click(driver, lwf.fieldSelect);
		cm.click(driver, lwf.selectNumberTwo);

		cm.click(driver, lwf.checkBoxOne);
		cm.click(driver, lwf.checkBoxTwo);
		cm.click(driver, lwf.radioButtonTwo);

		cm.writeText(driver, lwf.fieldDate, "08/21/1988");
		cm.click(driver, lwf.datePickerSelectActiveDay);

		cm.click(driver, lwf.buttonSubmit);

		String actualMessage = cm.getText(driver, lwft.fieldMessage);
		String expectedMessage = "Received!";

		Assert.assertEquals(expectedMessage, actualMessage);
	}

	@Test
	public void validateIfDisableInputIsDisabled() {
		Assert.assertFalse(cm.getElementIsEnabled(driver, lwf.fieldDisabled));
	}

	@Test
	public void validateIfReadonlyInputCanNotBeEditable() {
		String expectedText = cm.getText(driver, lwf.fieldReadyOnly);

		cm.writeText(driver, lwf.fieldReadyOnly, "new text");

		String actualText = cm.getText(driver, lwf.fieldReadyOnly);

		Assert.assertNotEquals("new text", actualText);
		Assert.assertEquals(expectedText, actualText);
	}
}