from selenium import webdriver
import unittest
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait

class Testdeprueba(unittest.TestCase):  # Cambio aquí

    def setUp(self):  
        service = Service(executable_path='chromedriver.exe')
        self.driver = webdriver.Chrome(service=service)
        self.driver.get("http://localhost:3000")
        
    def tearDown(self):
        self.driver.quit()

    
    def test_titulo(self):
        self.assertIn("AnimeAura", self.driver.title)

if __name__ == "__main__":
    unittest.main()
