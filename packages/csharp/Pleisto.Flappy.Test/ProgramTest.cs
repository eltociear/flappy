using Newtonsoft.Json.Linq;
using NUnit.Framework;
using Pleisto.Flappy.Utils;

namespace Pleisto.Flappy.Tests
{
  public class ProgramTest
  {
    /// <summary>
    /// Test json convert format
    /// </summary>
    [Test]
    public void JsonConvert()
    {
      Assert.Pass(new JObject
      {
        ["test"] = @"12312321
123123123123213",
        ["validate"] = new JObject
        {
          ["test"] = 123123123
        }
      }.JsonToString());
    }

    /// <summary>
    /// Test jsonschema format
    /// </summary>
    [Test]
    public void GenerateJsonSchema()
    {
      Assert.Pass(FlappyAgent.GetLanOutputSchema(true).ToString());
    }
  }

}
