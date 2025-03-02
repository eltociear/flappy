using Newtonsoft.Json.Linq;
using NUnit.Framework;
using Pleisto.Flappy.CodeInterpreter;
using System;
using System.Collections.Generic;

namespace Pleisto.Flappy.Tests
{
  /// <summary>
  /// Test of CodeInterpreter
  /// </summary>
  public class CodeInterpreter
  {
    /// <summary>
    /// Test Result of python helloworld
    /// </summary>
    [Test]
    public void PythonHelloWorldTest()
    {
      const string pythonHelloWorld = @"
print('Hello World');
";
      var result = NativeHandler.EvalPythonCode(pythonHelloWorld, false, new Dictionary<string, string>
      {
      });
      Console.WriteLine(JObject.FromObject(result).ToString());
      Assert.That(result.StdOut.Trim(), Is.EqualTo("Hello World"));
    }

    /// <summary>
    /// Test result of python version
    /// </summary>
    [Test]
    public void PythonInspect()
    {
      const string pythonInspectCode = @"
import platform

print(platform.python_version())
";
      var result = NativeHandler.EvalPythonCode(pythonInspectCode, false, new Dictionary<string, string>
      {
      });
      Console.WriteLine(JObject.FromObject(result).ToString());

    }

    /// <summary>
    /// Test of environment
    /// </summary>
    [Test]
    public void PythonEnvironment()
    {
      const string pythonEnvironment = @"
import os

print(os.environ['testEnv'])
";
      var result = NativeHandler.EvalPythonCode(pythonEnvironment, false, new Dictionary<string, string>
      {
        ["testEnv"] = "123123123"
      });
      Console.WriteLine(JObject.FromObject(result).ToString());
      Assert.That(result.StdOut.Trim(), Is.EqualTo("123123123"));
    }

    /// <summary>
    /// Test of native call lib
    /// </summary>
    [Test]
    public void NativeCall()
    {
      Assert.That(NativeHandler.NativeCall(), Is.EqualTo(true));
    }
  }
}
