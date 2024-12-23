FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 5100
EXPOSE 5101

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["BookList.Api/BookList.Api.csproj", "BookList.Api/"]
COPY ["BookList.DataAccess/BookList.DataAccess.csproj", "BookList.DataAccess/"]
COPY ["BookList.Core/BookList.Core.csproj", "BookList.Core/"]
COPY ["BookList.Application/BookList.Application.csproj", "BookList.Application/"]
RUN dotnet restore "BookList.Api/BookList.Api.csproj"
COPY . .
WORKDIR "/src/BookList.Api"
RUN dotnet build "BookList.Api.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "BookList.Api.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BookList.Api.dll"]
