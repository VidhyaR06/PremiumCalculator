using Microsoft.AspNetCore.Mvc;

namespace PremiumCalculator.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OccupationListController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<OccupationList> Get()
        {
            List<OccupationList> occupationList = new()
            {
                new OccupationList("Cleaner", "Light Manual"),
                new OccupationList("Doctor", "Professional"),
                new OccupationList("Author", "White Collar"),
                new OccupationList("Farmer", "Heavy Manual"),
                new OccupationList("Mechanic", "Heavy Manual"),
                new OccupationList("Florist", "Light Manual")
            };
            return occupationList;
        }

        [HttpGet("getOccupationFactor/{occupationName}")]
        public double GetOccupationFactor(string occupationName)
        {
            double occupationFactor = 0;
            //creating a dictionary using collection-initializer syntax
            var occupationRating = new Dictionary<string, double>(){
                        {"Professional", 1.0},
                        {"White Collar", 1.25},
                        {"Light Manual", 1.50},
                        {"Heavy Manual", 1.75}
            };
            if (occupationName != null)
            {
                occupationFactor = occupationRating.Where(p => p.Key.Equals(occupationName)).Select(x => x.Value).FirstOrDefault();
            }
            return occupationFactor;
        }
        
    }
}