package utils;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class CommonMethods {

	public void writeText(WebDriver driver, By locator, String text) {
		click(driver, locator);
		driver.findElement(locator).sendKeys(text);
	}
	
	public void click(WebDriver driver, By locator) {
		driver.findElement(locator).click();
	}
	
	public String getText(WebDriver driver, By locator) {
		return driver.findElement(locator).getText();
	}
	
	public String getPageTitle(WebDriver driver) {
		return driver.getTitle();
	}
	
	public boolean getElementIsEnabled(WebDriver driver, By locator) {
		return driver.findElement(locator).isEnabled();
	}

}
