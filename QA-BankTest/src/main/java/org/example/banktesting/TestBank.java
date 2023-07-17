package org.example.banktesting;

import base.InitiateDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

public class TestBank extends InitiateDriver {

    @Test
    public void testRegistrationBank() throws InterruptedException {

        for (int i = 0; i < 5; i++) {

            driver.findElement(By.name("firstname")).sendKeys("Player" + i);
            driver.findElement(By.name("lastname")).sendKeys("Yeah");
            driver.findElement(By.name("userName")).sendKeys("solera@solera.com");
            driver.findElement(By.name("password")).sendKeys("bootcamp2");
            driver.findElement(By.name("confirmpassword")).sendKeys("123");

            Thread.sleep(2000);

            driver.findElement(By.xpath("//*[@id=\"root\"]/div/form/button")).click();

            Thread.sleep(2000);

            driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div[2]/ul/li[5]")).click();

            Thread.sleep(1000);

        }

    }

    @Test
    public void testMyAccountDetails() throws InterruptedException {

        driver.findElement(By.name("firstname")).sendKeys("Mcgregor");
        driver.findElement(By.name("lastname")).sendKeys("Yeah");
        driver.findElement(By.name("userName")).sendKeys("solera@solera.com");
        driver.findElement(By.name("password")).sendKeys("bootcamp2");
        driver.findElement(By.name("confirmpassword")).sendKeys("123");

        Thread.sleep(2000);

        driver.findElement(By.xpath("//*[@id=\"root\"]/div/form/button")).click();

        Thread.sleep(2000);

        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div[2]/ul/li[2]/a")).click();

        Thread.sleep(2000);

        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/div/div/div[1]/a")).click();

        Thread.sleep(2000);

        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div[2]/ul/li[2]/a")).click();

        Thread.sleep(2000);

        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/div/div/div[2]/a")).click();

        Thread.sleep(2000);

        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div[2]/ul/li[2]/a")).click();

        Thread.sleep(2000);

        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/div/div/div[3]/a")).click();

        Thread.sleep(2000);

        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div[2]/ul/li[5]")).click();

        Thread.sleep(1000);

    }

    @Test
    public void phoneDataFuncTest() throws Exception {

        WebElement firstNameInput = driver.findElement(By.id("outlined-basic"));
        firstNameInput.sendKeys("Sven");
        WebElement lastNameInput = driver.findElement(By.name("lastname"));
        lastNameInput.sendKeys("Bren");
        WebElement userName = driver.findElement(By.name("userName"));
        userName.sendKeys("solera@solera.com");
        WebElement password = driver.findElement(By.name("password"));
        password.sendKeys("bootcamp2");
        WebElement confirmpassword = driver.findElement(By.name("confirmpassword"));
        confirmpassword.sendKeys("s");

        Thread.sleep(2000);

        driver.findElement(By.cssSelector(".MuiButtonBase-root")).click();

        Thread.sleep(2000);


        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div[2]/ul/li[4]")).click();

        Thread.sleep(2000);


        driver.findElement(By.xpath("//*[@id=\":rh:\"]")).sendKeys("901212223");

        Thread.sleep(2000);


        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/div/form/div/button")).click();

        Thread.sleep(2000);


        driver.findElement(new By.ByXPath("//*[@id=\"root\"]/div/div[2]/div/div/div[2]/ul/li[5]")).click();

        Thread.sleep(2000);


    }


}
