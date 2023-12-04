package test;

import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import locators.LocatorWebform;
import locators.LocatorWebformTarget;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class SeleniumWebform {

	private static WebDriver driver = null;
	private LocatorWebform lwf = new LocatorWebform();
	private LocatorWebformTarget lwft = new LocatorWebformTarget();

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
		String webTitle = driver.getTitle();
		Assert.assertEquals("Web form", webTitle);
	}

	@Test
	public void submitSeleniumWebformPageWithSuccess() {
		driver.findElement(lwf.fieldId).click();
		driver.findElement(lwf.fieldId).clear();
		driver.findElement(lwf.fieldId).sendKeys("Testing a text field");

		driver.findElement(lwf.fieldPassword).click();
		driver.findElement(lwf.fieldPassword).clear();
		driver.findElement(lwf.fieldPassword).sendKeys("passwordField");

		driver.findElement(lwf.fieldTextarea).click();
		driver.findElement(lwf.fieldTextarea).clear();
		driver.findElement(lwf.fieldTextarea).sendKeys("Testing a text area field");

		driver.findElement(lwf.fieldSelect).click();
		driver.findElement(lwf.selectNumberTwo).click();

		driver.findElement(lwf.checkBoxOne).click();
		driver.findElement(lwf.checkBoxTwo).click();
		driver.findElement(lwf.radioButtonTwo).click();
		
		driver.findElement(lwf.fieldDate).click();
		driver.findElement(lwf.fieldDate).clear();
		driver.findElement(lwf.fieldDate).sendKeys("08/21/1988");
		driver.findElement(lwf.datePickerSelectActiveDay).click();

		driver.findElement(lwf.buttonSubmit).click();

		String submitMessage = driver.findElement(lwft.fieldMessage).getText();

		Assert.assertEquals("Received!", submitMessage);
	}

	@Test
	public void validateIfDisableInputIsDisabled() {
		Assert.assertFalse(driver.findElement(By.name("my-disabled")).isEnabled());
	}

	@Test
	public void validateIfReadonlyInputCanNotBeEditable() {
		String expectedValueReadonlyInputField = driver.findElement(By.name("my-readonly")).getText();

		driver.findElement(By.name("my-readonly")).sendKeys("new text");

		String currentValueReadonlyInputField = driver.findElement(By.name("my-readonly")).getText();

		Assert.assertNotEquals("new text", currentValueReadonlyInputField);
		Assert.assertEquals(expectedValueReadonlyInputField, currentValueReadonlyInputField);
	}
}
