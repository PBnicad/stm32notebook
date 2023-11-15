#include "stm32f10x.h"

typedef unsigned int u32;   //类型重定义 unsigned int -- u32


void SystemInit(void)
{
	
}

void delay(u32 i)
{
	while(i--);
}

int main()
{
	RCC_APB2ENR |= 1<<3;
	GPIOB_CRL &= ~( 0x0F<< (4*5));
	GPIOB_CRL |= (3<<4*5);
	GPIOB_BSRR=(1<<(16+5));
	while(1)
	{
		GPIOB_BSRR=(1<<(16+5));
		delay(0xFFFFF);
		GPIOB_BSRR=(1<<(5));
		delay(0xFFFFF);
	}
}



