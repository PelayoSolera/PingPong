package base;

import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

import java.io.IOException;

public class InitiateDriver {

    public ChromeDriver driver;

    @BeforeMethod
    public void starBrowser() throws InterruptedException, IOException {
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("http://localhost:5173/signup");
        Thread.sleep(3000);
    }

    @AfterMethod
    public void closeBrowser() throws InterruptedException {
        //driver.close();
        driver.quit();
    }

}
