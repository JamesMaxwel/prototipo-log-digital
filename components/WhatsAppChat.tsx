import React, { useState, useRef, useEffect } from 'react'
import {
  Box,
  VStack,
  HStack,
  Input,
  IconButton,
  Text,
  useColorModeValue,
  Avatar,
  Flex,
  CloseButton,
  Button,
  Image,
} from '@chakra-ui/react'
import { FaPaperPlane, FaWhatsapp, FaSmile } from 'react-icons/fa'

interface Message {
  text: string
  isBot: boolean
  timestamp: Date
  options?: string[]
}

const initialMessages: Message[] = [
  {
    text: "Olá! Bem-vindo à Transportadora Gabijú. Como posso ajudar você hoje?",
    isBot: true,
    timestamp: new Date(),
    options: [
      "1. Solicitar orçamento",
      "2. Rastrear carga",
      "3. Falar com atendente",
      "4. Informações sobre serviços"
    ]
  }
]

export const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const bgColor = useColorModeValue('white', 'gray.800')

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleOptionClick = (option: string) => {
    handleSendMessage(option)
  }

  const handleSendMessage = (text: string = inputValue) => {
    if (!text.trim()) return

    const newMessage: Message = {
      text: text,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newMessage])
    setInputValue("")

    // Simular resposta do bot
    setTimeout(() => {
      let botResponse: Message = {
        text: "",
        isBot: true,
        timestamp: new Date()
      }
      
      if (text.includes("1")) {
        botResponse.text = "Para solicitar um orçamento, preciso de algumas informações:\n\n📦 Origem e destino da carga\n🚛 Tipo de material\n⚖️ Peso aproximado\n\nPor favor, informe esses dados."
      } else if (text.includes("2")) {
        botResponse.text = "🔍 Para rastrear sua carga, por favor, informe o número do CTe ou código de rastreamento."
      } else if (text.includes("3")) {
        botResponse.text = "👩‍💼 Estou transferindo você para um de nossos atendentes.\n\n⏳ Por favor, aguarde um momento.\n✅ Você será atendido em breve!"
      } else if (text.includes("4")) {
        botResponse.text = "ℹ️ A Gabijú é especializada em transporte de combustíveis e produtos químicos.\n\n✅ Frota de 60 caminhões\n🌎 Atuação nacional\n📍 Filiais em SP e PR\n👥 Equipe especializada\n\nPrecisa de mais informações?"
        botResponse.options = ["Sim, quero saber mais", "Não, obrigado"]
      } else {
        botResponse.text = "Por favor, escolha uma das opções abaixo:"
        botResponse.options = [
          "1. Solicitar orçamento",
          "2. Rastrear carga",
          "3. Falar com atendente",
          "4. Informações sobre serviços"
        ]
      }

      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  }

  if (!isOpen) {
    return (
      <IconButton
        icon={<FaWhatsapp size="28px" />}
        aria-label="Abrir WhatsApp"
        position="fixed"
        bottom="4"
        right="4"
        size="lg"
        bg="#25D366"
        color="white"
        rounded="full"
        w="60px"
        h="60px"
        _hover={{ bg: '#128C7E', transform: 'scale(1.1)' }}
        transition="all 0.2s"
        onClick={() => setIsOpen(true)}
        boxShadow="xl"
      />
    )
  }

  return (
    <Box
      position="fixed"
      bottom="4"
      right="4"
      width="350px"
      height="500px"
      bg="#E5DDD5"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="2xl"
    >
      {/* Header */}
      <Box bg="#075E54" p={3} color="white">
        <Flex justify="space-between" align="center">
          <HStack spacing={3}>
            <Avatar 
              size="sm"
              src="/logo-gabiju.png"
              bg="white"
              p={0.5}
              icon={<FaWhatsapp color="#075E54" />}
              loading="eager"
            />
            <Box>
              <Text fontWeight="bold" fontSize="md">Gabijú Digital</Text>
              <Text fontSize="xs" opacity={0.8}>online</Text>
            </Box>
          </HStack>
          <CloseButton onClick={() => setIsOpen(false)} color="white" />
        </Flex>
      </Box>

      {/* Background do WhatsApp */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity={0.06}
        backgroundImage="url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=')"
        backgroundRepeat="repeat"
        pointerEvents="none"
      />

      {/* Messages */}
      <VStack
        height="380px"
        overflowY="auto"
        p={4}
        spacing={4}
        align="stretch"
        position="relative"
        css={{
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(255,255,255,0.1)',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(0,0,0,0.2)',
            borderRadius: '3px',
          },
        }}
      >
        {messages.map((message, index) => (
          <Flex
            key={index}
            direction="column"
            align={message.isBot ? 'flex-start' : 'flex-end'}
          >
            <Box
              maxW="80%"
              bg={message.isBot ? 'white' : '#DCF8C6'}
              color="black"
              p={3}
              borderRadius="lg"
              position="relative"
              boxShadow="sm"
              _before={{
                content: '""',
                position: 'absolute',
                top: '0',
                [message.isBot ? 'left' : 'right']: '-8px',
                borderStyle: 'solid',
                borderWidth: '8px 8px 0 0',
                borderColor: `${message.isBot ? 'white' : '#DCF8C6'} transparent transparent transparent`,
                transform: message.isBot ? 'none' : 'scaleX(-1)',
              }}
            >
              <Text whiteSpace="pre-line" fontSize="15px">{message.text}</Text>
              <Text
                fontSize="11px"
                color="gray.500"
                textAlign="right"
                mt={1}
              >
                {formatTime(message.timestamp)}
              </Text>
            </Box>
            {message.options && (
              <VStack align={message.isBot ? 'flex-start' : 'flex-end'} mt={2} spacing={2}>
                {message.options.map((option, optIndex) => (
                  <Button
                    key={optIndex}
                    size="sm"
                    variant="outline"
                    bg="white"
                    color="#075E54"
                    borderColor="#075E54"
                    _hover={{ bg: '#075E54', color: 'white' }}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </Button>
                ))}
              </VStack>
            )}
          </Flex>
        ))}
        <div ref={messagesEndRef} />
      </VStack>

      {/* Input */}
      <HStack p={3} bg="#F0F2F5" spacing={2}>
        <IconButton
          icon={<FaSmile />}
          aria-label="Emojis"
          variant="ghost"
          color="gray.500"
          rounded="full"
        />
        <Input
          placeholder="Digite uma mensagem"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          bg="white"
          borderRadius="full"
          _focus={{ borderColor: '#128C7E', boxShadow: 'none' }}
        />
        <IconButton
          icon={<FaPaperPlane size="18px" />}
          aria-label="Enviar mensagem"
          bg="#00A884"
          color="white"
          rounded="full"
          _hover={{ bg: '#008C70' }}
          onClick={() => handleSendMessage()}
        />
      </HStack>
    </Box>
  )
} 