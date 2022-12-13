import { useState } from "react";
import { VStack, Heading, Text, useToast } from "native-base";
import Logo from "../assets/logo.svg";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";

import { api } from "../services/api";

export function New() {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  async function handlePoolCreate() {
    if (!title.trim()) {
      return toast.show({
        title: "Informe um nome para o seu bolão",
        placement: "top",
        bgColor: "red.500",
      });
    }

    try {
      setIsLoading(true);

      const pools = await api.post('/pools', { title: title.toUpperCase() })
      console.log(pools);
      toast.show({
        title: "Criado com sucesso",
        placement: "top",
        bgColor: "green.500",
      });
      setTitle('');
    } catch (error) {
      console.log(error);

      toast.show({
        title: "Não foi possível criar o boçao",
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Criar novo bolão" showBackButton onShare={null} />

      <VStack mt={8} mx={5} alignItems="center">
        <Logo />
        <Heading
          fontFamily="heading"
          color="white"
          fontSize="xl"
          my={8}
          textAlign="center"
        >
          Crie seu próprio bolão da copa {"\n"} e compartilhe com seus amigos!
        </Heading>

        <Input
          onChangeText={setTitle}
          value={title}
          mb={2}
          placeholder="Qual nome do seu bolão?"
        />

        <Button
          onPress={handlePoolCreate}
          title="CRIAR MEU BOLÃO"
          isLoading={isLoading}
        >
          <Text
            color="gray.200"
            fontSize="sm"
            textAlign="center"
            px={10}
            mt={4}
          >
            Após criar o bolão, você receberá um código único que poderá usar
            para convidar outras pessoas
          </Text>
        </Button>
      </VStack>
    </VStack>
  );
}
