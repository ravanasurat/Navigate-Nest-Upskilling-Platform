import requests
import json
import pandas as pd
import time
import logging
import random
from typing import Dict, List, Any
from urllib.parse import urlencode


class LinkedInDataFetcher:
    """
    A class to fetch employment data from LinkedIn API including:
    - Country
    - Field
    - Substream
    - Job Vacancies
    - Growth Rate (%)
    - Average Salary (USD)
    - Skill Demand Score
    """
    
    def _init_(self, client_id: str, client_secret: str, redirect_uri: str = None):
        """
        Initialize the LinkedIn API client
        
        Args:
            client_id: LinkedIn API Client ID
            client_secret: LinkedIn API Client Secret
            redirect_uri: OAuth redirect URI (used for 3-legged OAuth)
        """
        self.client_id = client_id
        self.client_secret = client_secret
        self.redirect_uri = redirect_uri
        self.access_token = None
        
        self.logger = self._setup_logging()
        
        self._authenticate()
    
    def _setup_logging(self):
        """Set up logging configuration"""
        logger = logging.getLogger('linkedin_api')
        logger.setLevel(logging.DEBUG)

        ch = logging.StreamHandler()
        ch.setLevel(logging.DEBUG)
        
    
        formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
        ch.setFormatter(formatter)
        
        logger.addHandler(ch)
        
        return logger
    
    def _authenticate(self):
        """Attempt to authenticate with LinkedIn API"""
        try:
            self.access_token = self._get_access_token()
            self.logger.info("Authentication successful")
        except Exception as e:
            self.logger.error(f"Authentication failed: {str(e)}")
            self.logger.info("Falling back to sample data mode")
    
    def _get_access_token(self) -> str:
        """
        Authenticate with LinkedIn API and get access token
        
        Returns:
            str: Access token for API calls
        """
        token_url = "https://www.linkedin.com/oauth/v2/accessToken"
        headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        }
        payload = {
            "grant_type": "client_credentials",
            "client_id": self.client_id,
            "client_secret": self.client_secret
        }
        
        self.logger.debug(f"Requesting access token from {token_url}")
        response = requests.post(token_url, headers=headers, data=payload)
        
        self.logger.debug(f"Authentication response status: {response.status_code}")
        
        if response.status_code == 200:
            token_data = response.json()
            self.logger.info(f"Access token obtained. Expires in: {token_data.get('expires_in')} seconds")
            return token_data.get("access_token")
        else:
            self.logger.error(f"Authentication failed: {response.status_code} - {response.text}")
            raise Exception(f"Authentication failed: {response.status_code} - {response.text}")
    
    def get_auth_url(self) -> str:
        """
        Generate authorization URL for user authorization (3-legged OAuth)
        
        Returns:
            str: Authorization URL
        """
        if not self.redirect_uri:
            raise ValueError("Redirect URI is required for authorization flow")
        
        base_url = "https://www.linkedin.com/oauth/v2/authorization"
        params = {
            "response_type": "code",
            "client_id": self.client_id,
            "redirect_uri": self.redirect_uri,
            "scope": "r_liteprofile r_emailaddress w_member_social"  
        }
        
        auth_url = f"{base_url}?{urlencode(params)}"
        return auth_url
    
    def exchange_code_for_token(self, authorization_code: str) -> str:
        """
        Exchange authorization code for access token (3-legged OAuth)
        
        Args:
            authorization_code: Authorization code from callback
            
        Returns:
            str: Access token
        """
        if not self.redirect_uri:
            raise ValueError("Redirect URI is required for authorization flow")
        
        token_url = "https://www.linkedin.com/oauth/v2/accessToken"
        headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        }
        payload = {
            "grant_type": "authorization_code",
            "code": authorization_code,
            "redirect_uri": self.redirect_uri,
            "client_id": self.client_id,
            "client_secret": self.client_secret
        }
        
        response = requests.post(token_url, headers=headers, data=payload)
        
        if response.status_code == 200:
            token_data = response.json()
            self.access_token = token_data.get("access_token")
            return self.access_token
        else:
            raise Exception(f"Code exchange failed: {response.status_code} - {response.text}")
    
    def _make_api_request(self, url: str, params: Dict = None) -> Dict:
        """
        Make a request to LinkedIn API
        
        Args:
            url: Full API URL to call
            params: Query parameters
            
        Returns:
            Dict: API response data
        """
        if not self.access_token:
            self.logger.warning("No access token available. Authentication required.")
            return {}
        
        headers = {
            "Authorization": f"Bearer {self.access_token}",
            "Content-Type": "application/json",
            "X-Restli-Protocol-Version": "2.0.0"
        }
        
        self.logger.debug(f"Making API request to: {url}")
        response = requests.get(url, headers=headers, params=params)
        
        if response.status_code == 200:
            return response.json()
        elif response.status_code == 401:
            self.logger.warning("Access token expired or invalid. Attempting to refresh...")
            self._authenticate()
            if self.access_token:
                headers["Authorization"] = f"Bearer {self.access_token}"
                response = requests.get(url, headers=headers, params=params)
                if response.status_code == 200:
                    return response.json()
        elif response.status_code == 429:  
            retry_after = int(response.headers.get("Retry-After", 60))
            self.logger.warning(f"Rate limit exceeded. Waiting for {retry_after} seconds...")
            time.sleep(retry_after)
            return self._make_api_request(url, params)
        
        self.logger.error(f"API request failed: {response.status_code} - {response.text}")
        return {}
    
    def search_jobs(self, keywords: List[str] = None, location: str = None, 
                    limit: int = 20) -> List[Dict]:
        """
        Search for jobs on LinkedIn
        
        Args:
            keywords: List of job keywords
            location: Job location
            limit: Maximum number of results
            
        Returns:
            List[Dict]: Job listings
        """
        url = "https://api.linkedin.com/v2/jobSearch"
        
        params = {"count": limit}
        if keywords:
            params["keywords"] = ",".join(keywords)
        if location:
            params["location"] = location
            
        try:
            data = self._make_api_request(url, params)
            if data and "elements" in data:
                return data["elements"]
            return []
        except Exception as e:
            self.logger.error(f"Error searching jobs: {str(e)}")
            return []
    
    def get_job_market_data(self, countries: List[str] = None, fields: List[str] = None) -> pd.DataFrame:
        """
        Get job market data including vacancies, growth rate, salary, and skill demand score
        
        Args:
            countries: List of countries to filter by
            fields: List of fields to filter by
            
        Returns:
            pd.DataFrame: DataFrame containing job market data
        """
        if self.access_token:
            try:
                url = "https://api.linkedin.com/v2/marketInsights/jobMarket"
                
                params = {}
                if countries:
                    params["geoRegion"] = ",".join(countries)
                if fields:
                    params["industries"] = ",".join(fields)
                
                data = self._make_api_request(url, params)
                if data and len(data) > 0:
                    return self._process_job_market_data(data)
            except Exception as e:
                self.logger.error(f"Error fetching job market data: {str(e)}")
                self.logger.info("Falling back to sample data")
        
        return self._get_sample_data(100)  
    
    def _process_job_market_data(self, data: Dict) -> pd.DataFrame:
        """
        Process raw API data into a structured DataFrame
        
        Args:
            data: Raw API response data
            
        Returns:
            pd.DataFrame: Structured job market data
        """
        results = []
        elements = data.get("elements", [])
        
        for element in elements:
            country = element.get("geoRegion", {}).get("name", "Unknown")
            
            for industry in element.get("industries", []):
                field = industry.get("name", "Unknown")
                
                for specialty in industry.get("specialties", []):
                    substream = specialty.get("name", "Unknown")
                    metrics = specialty.get("metrics", {})
                    
                    vacancies = metrics.get("openPositionsCount", 0)
                    growth_rate = metrics.get("growthRate", {}).get("value", 0)
                    avg_salary = metrics.get("compensationInfo", {}).get("amount", 0)
                    skill_demand = metrics.get("demandIndex", 0)
                    
                    results.append({
                        "Country": country,
                        "Field": field,
                        "Substream": substream,
                        "Job Vacancies": vacancies,
                        "Growth Rate (%)": growth_rate,
                        "Average Salary (USD)": avg_salary,
                        "Skill Demand Score": skill_demand
                    })
        
        return pd.DataFrame(results)
    
    def _get_sample_data(self, num_records: int = 10) -> pd.DataFrame:
        """
        Generate sample data for demonstration purposes
        
        Args:
            num_records: Number of sample records to generate
            
        Returns:
            pd.DataFrame: Sample job market data
        """
        countries = [
            "United States", "India", "Germany", "United Kingdom", "Canada", 
            "Australia", "Singapore", "France", "Japan", "China", "Brazil", 
            "South Africa", "Mexico", "Spain", "Italy", "Sweden", "Netherlands", 
            "South Korea", "Russia", "United Arab Emirates"
        ]
        
        fields = [
            "Technology", "Healthcare", "Finance", "Engineering", "Education", 
            "Hospitality", "Manufacturing", "Retail", "Marketing", "Media", 
            "Construction", "Agriculture", "Transportation", "Energy", "Legal"
        ]
        
        substreams = {
            "Technology": ["Software Development", "Data Science", "Cybersecurity", "Cloud Computing", "DevOps", "AI/Machine Learning", "Product Management", "Technical Support", "UI/UX Design", "Quality Assurance"],
            "Healthcare": ["Nursing", "Physical Therapy", "Medical Research", "Healthcare Administration", "Mental Health", "Dentistry", "Pharmacy", "Public Health", "Radiology", "Emergency Medicine"],
            "Finance": ["Investment Banking", "Financial Analysis", "Accounting", "Financial Planning", "Risk Management", "Insurance", "Wealth Management", "Corporate Finance", "Real Estate Finance", "Tax Advisory"],
            "Engineering": ["Mechanical Engineering", "Civil Engineering", "Electrical Engineering", "Chemical Engineering", "Aerospace Engineering", "Biomedical Engineering", "Industrial Engineering", "Environmental Engineering", "Petroleum Engineering", "Structural Engineering"],
            "Education": ["Primary Teaching", "Secondary Teaching", "Higher Education", "Special Education", "Educational Administration", "Curriculum Development", "Educational Technology", "Language Teaching", "School Counseling", "Distance Learning"],
            "Hospitality": ["Tourism Management", "Hotel Management", "Event Planning", "Culinary Arts", "Restaurant Management", "Travel Agency", "Cruise Line Operations", "Resort Management", "Food & Beverage Management", "Entertainment Management"],
            "Manufacturing": ["Production Management", "Quality Control", "Supply Chain", "Plant Operations", "Process Engineering", "Safety Management", "Logistics", "Maintenance", "Production Planning", "Lean Manufacturing"],
            "Retail": ["Store Management", "Merchandising", "Buying", "E-commerce", "Category Management", "Visual Merchandising", "Retail Operations", "Inventory Management", "Customer Service", "Sales Management"],
            "Marketing": ["Digital Marketing", "Content Marketing", "Market Research", "Brand Management", "Social Media Marketing", "SEO/SEM", "Marketing Analytics", "Public Relations", "Product Marketing", "Advertising"],
            "Media": ["Journalism", "Broadcasting", "Film Production", "Publishing", "Digital Media", "Media Planning", "Media Sales", "Content Creation", "Animation", "Photography"],
            "Construction": ["Project Management", "Architecture", "Site Management", "Quantity Surveying", "Building Services", "Health & Safety", "Building Inspection", "Estimating", "Contract Management", "Civil Construction"],
            "Agriculture": ["Crop Production", "Livestock Management", "Agricultural Research", "Forestry", "Fisheries", "Agricultural Economics", "Soil Science", "Precision Agriculture", "Agricultural Engineering", "Farm Management"],
            "Transportation": ["Logistics Coordination", "Fleet Management", "Air Traffic Control", "Railway Operations", "Maritime Operations", "Transportation Planning", "Supply Chain Logistics", "Dispatch Operations", "Freight Forwarding", "Transportation Safety"],
            "Energy": ["Renewable Energy", "Oil & Gas", "Power Generation", "Energy Distribution", "Energy Efficiency", "Nuclear Energy", "Smart Grid", "Energy Policy", "Energy Trading", "Sustainability"],
            "Legal": ["Corporate Law", "Litigation", "Intellectual Property", "Environmental Law", "Employment Law", "Tax Law", "International Law", "Criminal Law", "Family Law", "Real Estate Law"]
        }
        
        # Generate sample data
        data = []
        for _ in range(num_records):
            country = random.choice(countries)
            field = random.choice(fields)
            substream = random.choice(substreams.get(field, ["General"]))
            
            # Generate realistic data with some variation
            job_vacancies = random.randint(5000, 300000)
            growth_rate = round(random.uniform(0.5, 25.0), 1)
            avg_salary = random.randint(25000, 150000)
            skill_demand = random.randint(50, 95)
            
            data.append({
                "Country": country,
                "Field": field,
                "Substream": substream,
                "Job Vacancies": job_vacancies,
                "Growth Rate (%)": growth_rate,
                "Average Salary (USD)": avg_salary,
                "Skill Demand Score": skill_demand
            })
        
        return pd.DataFrame(data)
    
    def export_to_csv(self, df: pd.DataFrame, filename: str = "linkedin_job_data.csv") -> None:
        """
        Export data to CSV file
        
        Args:
            df: DataFrame to export
            filename: Output filename
        """
        df.to_csv(filename, index=False)
        self.logger.info(f"Data exported to {filename}")
    
    def export_to_json(self, df: pd.DataFrame, filename: str = "linkedin_job_data.json") -> None:
        """
        Export data to JSON file
        
        Args:
            df: DataFrame to export
            filename: Output filename
        """
        df.to_json(filename, orient="records", indent=2)
        self.logger.info(f"Data exported to {filename}")


def main():
    # LinkedIn API credentials
    CLIENT_ID = "86o0wcvevttr5e"
    CLIENT_SECRET = "WPL_AP1.QWlPNkLRrvzjpjTQ"
    REDIRECT_URI = "http://localhost:8000/callback" 

    logging.basicConfig(level=logging.INFO)
    
    try:
        fetcher = LinkedInDataFetcher(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
        
        countries = ["United States", "India", "Germany", "United Kingdom"]
        fields = ["Technology", "Healthcare", "Finance"]
        
        print("\nFetching LinkedIn job market data...")
        job_data = fetcher.get_job_market_data(countries, fields)
        
        print(f"\nGenerated {len(job_data)} records of job market data")
        
        print("\nData Preview:")
        print(job_data.head())
 
        print("\nSummary Statistics:")
        print(job_data.describe())
        
        fetcher.export_to_csv(job_data)
        print(f"\nData has been exported to linkedin_job_data.csv")
        
        fetcher.export_to_json(job_data)
        
        print("\nIf you want to use authorization code flow, visit:")
        print(fetcher.get_auth_url())
        print("Then exchange the code for a token using fetcher.exchange_code_for_token(code)")
        
    except Exception as e:
        print(f"An error occurred: {str(e)}")


if __name__ == "_main_":
    main()