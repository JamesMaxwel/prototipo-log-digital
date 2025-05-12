import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  useColorModeValue,
  Button,
  Flex,
  Stack,
  Image,
  Divider,
} from '@chakra-ui/react'
import { FaWhatsapp, FaUsers, FaTruck, FaChartLine, FaMapMarkedAlt, FaShieldAlt, FaClock } from 'react-icons/fa'
import Head from 'next/head'
import Layout from '../components/Layout'
import { WhatsAppChat } from '../components/WhatsAppChat'

const Feature = ({ title, text, icon }: { title: string; text: string; icon: any }) => {
  return (
    <VStack
      p={8}
      bg={useColorModeValue('white', 'gray.800')}
      rounded="xl"
      shadow="lg"
      spacing={4}
      align="start"
      borderWidth="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'xl',
      }}
      transition="all 0.3s"
      height="full"
    >
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        color="white"
        rounded="full"
        bg="brand.500"
        mb={1}
      >
        <Icon as={icon} w={8} h={8} />
      </Flex>
      <Heading size="md" color={useColorModeValue('gray.800', 'white')}>
        {title}
      </Heading>
      <Text color={useColorModeValue('gray.600', 'gray.300')} fontSize="md">
        {text}
      </Text>
    </VStack>
  )
}

const Statistic = ({ number, label }: { number: string; label: string }) => {
  return (
    <VStack spacing={2} align="center">
      <Text fontSize="4xl" fontWeight="bold" color="brand.500">
        {number}
      </Text>
      <Text fontSize="lg" color="gray.600">
        {label}
      </Text>
    </VStack>
  )
}

export default function Home() {
  const openWhatsAppChat = () => {
    const button = document.querySelector('[aria-label="Abrir WhatsApp"]');
    if (button instanceof HTMLButtonElement) {
      button.click();
    }
  };

  return (
    <Layout>
      <Head>
        <title>Gabijú Transportes - Excelência em Transporte de Cargas</title>
        <meta name="description" content="Transportadora Gabijú - Especializada em transporte de combustíveis e produtos químicos, com atuação nacional e frota moderna." />
      </Head>

      {/* Hero Section */}
      <Box 
        as="section" 
        bg="brand.500" 
        color="white" 
        py={20}
        position="relative"
        overflow="hidden"
      >
        <Container maxW="container.xl">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={8}
            align="center"
            justify="space-between"
          >
            <VStack align="start" spacing={6} maxW="600px">
              <Heading 
                as="h1" 
                size="2xl"
                lineHeight="shorter"
              >
                Transporte Seguro e Eficiente para sua Carga
              </Heading>
              <Text fontSize="xl">
                Há mais de 20 anos oferecendo soluções em transporte de combustíveis e produtos químicos com segurança e pontualidade.
              </Text>
              <Button
                size="lg"
                colorScheme="whiteAlpha"
                rightIcon={<FaWhatsapp />}
                onClick={openWhatsAppChat}
              >
                Fale Conosco
              </Button>
            </VStack>
            <Box 
              w={{ base: "full", md: "40%" }}
              display={{ base: 'none', md: 'block' }}
              position="relative"
            >
              <Box
                as="svg"
                viewBox="0 0 24 24"
                fill="white"
                opacity={0.9}
                w="full"
                h="full"
                minH="300px"
              >
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box py={16} bg="gray.50">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
            <Statistic number="60+" label="Caminhões na Frota" />
            <Statistic number="20+" label="Anos de Experiência" />
            <Statistic number="2" label="Filiais Estratégicas" />
            <Statistic number="100%" label="Clientes Satisfeitos" />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={12} align="stretch">
            <VStack spacing={4} align="center" textAlign="center">
              <Heading size="xl" color="gray.800">
                Por que escolher a Gabijú?
              </Heading>
              <Text 
                fontSize="lg" 
                color="gray.600" 
                maxW="container.md"
              >
                Oferecemos soluções completas em transporte, com foco em segurança e eficiência
              </Text>
            </VStack>

            <SimpleGrid 
              columns={{ base: 1, md: 2, lg: 3 }} 
              spacing={8} 
              w="full"
            >
              <Feature
                icon={FaTruck}
                title="Frota Moderna"
                text="Veículos rastreados e equipados com tecnologia de ponta para garantir a segurança da sua carga"
              />
              <Feature
                icon={FaMapMarkedAlt}
                title="Cobertura Nacional"
                text="Atuação em todo território nacional, com filiais estrategicamente localizadas"
              />
              <Feature
                icon={FaShieldAlt}
                title="Segurança Total"
                text="Processos rigorosos de segurança e motoristas altamente capacitados"
              />
              <Feature
                icon={FaClock}
                title="Pontualidade"
                text="Compromisso com prazos e planejamento logístico eficiente"
              />
              <Feature
                icon={FaUsers}
                title="Equipe Especializada"
                text="Profissionais treinados e dedicados ao seu atendimento"
              />
              <Feature
                icon={FaChartLine}
                title="Gestão Moderna"
                text="Sistema integrado de gestão para acompanhamento em tempo real"
              />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box 
        as="section" 
        bg="brand.500" 
        color="white" 
        py={16}
      >
        <Container maxW="container.xl">
          <VStack spacing={6} align="center" textAlign="center">
            <Heading size="xl">
              Pronto para otimizar sua logística?
            </Heading>
            <Text fontSize="lg" maxW="container.md">
              Entre em contato agora mesmo e descubra como podemos ajudar sua empresa
            </Text>
            <Button
              size="lg"
              colorScheme="whiteAlpha"
              rightIcon={<FaWhatsapp />}
              onClick={openWhatsAppChat}
            >
              Solicitar Orçamento
            </Button>
          </VStack>
        </Container>
      </Box>

      <WhatsAppChat />
    </Layout>
  )
} 