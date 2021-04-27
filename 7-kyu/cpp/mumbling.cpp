// Mumbling
//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
class Accumul
{
public:
    static std::string accum(const std::string &s);
};

std::string Accumul::accum(const std::string & s)
{
  std::string output;
  for (int i = 0; i < s.length(); i++)
  {
    std::string part(i+1, std::tolower(s[i]));
    part[0] = std::toupper(part[0]);
    output += part + "-";
  }
  
  return output.substr(0, output.size()-1);
}
