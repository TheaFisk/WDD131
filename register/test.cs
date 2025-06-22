public class Bird
{
    public int Legs = 2;
    public void Fly()
    {
        Console.WriteLine("The bird flaps its wings and takes off.");
    }
}

public class Pigeon : Bird
{
    public void Coo()
    {
        Console.WriteLine("The pigeon coos softly.");
    }
}

public class Eagle : Bird
{
    public void Swoop()
    {
        Console.WriteLine("The eagle swoops down swiftly.");
    }
}

