package config;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

public class PropertyReader {

    public static String aplicationLocatorReader(String key) throws IOException {

        File f = new File(
                "jetbrains://idea/navigate/reference?project=QA-BankTest&path=LocatorBank.properties"
        );
        FileReader fr = new FileReader(f);
        Properties prop = new Properties();

        prop.load(fr);
        return prop.get(key).toString();

    }

}
