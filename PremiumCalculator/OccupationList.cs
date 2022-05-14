namespace PremiumCalculator
{

    public class OccupationList
    {
        public string Name { get; set; }

        public string Rating { get; set; }
        public OccupationList(string name, string rating)
        {
            this.Name = name;
            this.Rating = rating;
        }
    }
}