function ackermann(int m,int n)
{
    if (m == 0) return(n + 1);
    else if (m > 0 && n == 0) return ackermann(m - 1, 1);
}
