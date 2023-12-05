package locators;

import org.openqa.selenium.By;

public class LocatorWebform {

	public By buttonSubmit = By.xpath("//*[contains(@type, 'submit')]");
	
	public By checkBoxOne = By.id("my-check-1");
	public By checkBoxTwo = By.id("my-check-2");
	
	public By datePickerSelectActiveDay = By.xpath("//*[@class='active day']");
	
	public By fieldDate = By.name("my-date");
	public By fieldId = By.id("my-text-id");
	public By fieldPassword = By.name("my-password");
	public By fieldSelect = By.name("my-select");
	public By fieldTextarea = By.name("my-textarea");
	
	public By radioButtonTwo = By.id("my-radio-2");
	
	public By selectNumberTwo = By.xpath("//*[contains(text(), 'Two')]");

}
